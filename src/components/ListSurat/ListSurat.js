import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SuratItem from '../SuratItem/SuratItem';

const baseUrl = process.env.REACT_APP_QURAN_API_BASE_URL;

const ListSurat = () => {
	const [surat, setSurat] = useState([]);

	useEffect(() => {
		const getListSurat = async () => {
			const response = await axios.get(`${baseUrl}/quran`);
			const data = response.data;
			if (data.status === 200) {
				setSurat(data.data);
			}
		}

		getListSurat();
	}, [])

	return (
		<Row>
			<Col lg='4'>
				<SuratItem surat={surat.slice(0, 38)} />
			</Col>
			<Col lg='4'>
				<SuratItem surat={surat.slice(38, 76)} />
			</Col>
			<Col lg='4'>
				<SuratItem surat={surat.slice(76, 114)} />
			</Col>
		</Row>
	);
}

export default ListSurat;