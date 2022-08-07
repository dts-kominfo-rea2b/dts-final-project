import React, { useContext, useState, useRef } from "react";
import LayoutDashboard from "../layout/layout";
import "../assets/css/createblog.css";
import { Form, Button, Input } from "antd";
import StateContext from "../context/StateContext";
import { Upload, notification } from "antd";
import { storage, fireStore, auth } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import JoditEditor from "jodit-react";
import Loading from "../components/Loading";
const CreateBlog = () => {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readonly: false,
  };

  const [form] = Form.useForm();
  const { theme, setMenuActive } = useContext(StateContext);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const handleSubmit = async (value) => {
    setLoading(true);
    if (user) {
      await addDoc(collection(fireStore, "blog_post"), {
        ...value,
        title: `${value?.title}`,
        category: `${value?.category}`,
        content: `${value?.content}`,
        author: `${user?.displayName}`,
        image: downloadUrl && `${downloadUrl}`,
        timestamp: serverTimestamp(),
      }).then((res) => {
        setLoading(false);
        setMenuActive(["1"]);
        navigate("/dashboard");
        notification.success({
          message: `Success`,
          description: "Create article success!",
          duration: 6,
        });
      });
    }
  };
  const [fileList, setFileList] = useState([]);

  const customRequest = async ({ onSuccess, onError, file }) => {
    setLoading(true);
    const storageRef = ref(storage, `blog-image/${Date.now() + file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const uploadProgress =
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        onError();
        notification.error({
          message: `Upload Gagal`,
          description:
            "Upload gambar gagal, periksa kembali koneksi internet anda!",
          duration: 5,
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadUrl(downloadURL);
          onSuccess();
          setLoading(false);
        });
      }
    );
  };
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <LayoutDashboard>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container-createblog">
          <span
            className="create-blog-title"
            style={{ color: theme === "light" ? "#000" : "#fff" }}
          >
            Create Article
          </span>
          <Form
            className="createblog-form"
            form={form}
            onFinish={handleSubmit}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Form.Item
              name="title"
              label={
                <label style={{ color: theme === "light" ? "#000" : "#fff" }}>
                  Title
                </label>
              }
              rules={[
                {
                  required: true,
                  message: "Title is required!",
                },
              ]}
            >
              <Input size="large" style={{ borderRadius: "20px" }} />
            </Form.Item>

            <Form.Item
              name="category"
              label={
                <label style={{ color: theme === "light" ? "#000" : "#fff" }}>
                  Category
                </label>
              }
              rules={[
                {
                  required: true,
                  message: "category is required!",
                },
              ]}
            >
              <Input size="large" style={{ borderRadius: "20px" }} />
            </Form.Item>
            <Form.Item
              label={
                <label style={{ color: theme === "light" ? "#000" : "#fff" }}>
                  Content
                </label>
              }
              name="content"
              rules={[
                {
                  required: true,
                  message: "content is required!",
                },
              ]}
            >
              <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
            </Form.Item>
            <Form.Item name="image">
              <Upload
                listType="picture-card"
                customRequest={customRequest}
                onPreview={onPreview}
                onChange={onChange}
                fileList={fileList}
              >
                {fileList.length < 1 && "+ Upload"}
              </Upload>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button
                ghost={theme === "light" ? false : true}
                loading={loading}
                shape="round"
                htmlType="submit"
                size="large"
                style={{ width: "100%", marginTop: 25 }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </LayoutDashboard>
  );
};

export default CreateBlog;
