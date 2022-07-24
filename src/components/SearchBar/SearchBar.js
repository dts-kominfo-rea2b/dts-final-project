import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

const SearchBar = () => {

    return (
        <>
            <InputGroup className="mb-3 search-bar" size='lg'>
                <Form.Control
                    placeholder="Mau baca apa hari ini?"
                    aria-label="whats-read"
                    style={{
                        borderTopLeftRadius:"25px",
                        borderBottomLeftRadius:"25px",
                        borderRight:"none",
                        outline: "none",
                        boxShadow: "none"
                    }}
                />
                <InputGroup.Text
                    className='bg-light border-0'
                    style={{
                        borderTopRightRadius:"25px",
                        borderBottomRightRadius:"25px",
                    }}
                    >
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
            </InputGroup>
        </>
    );
}

export default SearchBar;