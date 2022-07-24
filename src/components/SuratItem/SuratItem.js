import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SurahNumber = styled.div`
	background:#cee;
	width: 75px;
	height:75px;
	border-radius:25%;
	padding:15px;
	font-size:1.65rem;
	text-align: center;
`;

const LatinSurahName = styled.h4`
	font-family: 'Quicksand';
	font-weight: 600;
`;

const ArabicSurahName = styled.div`
	font-family: 'Amiri', serif;
	font-weight: bold;
	font-size:1.8rem;
`;

const StyledCard = styled(Card)`
	display:flex;
	flex-direction:row;
	justify-content: space-between;
	align-items: center;
	margin-bottom:1rem;
	height:120px;
	flex:1;
	&:hover {
		cursor: pointer;
		transition: 0.65s;
		background-color: #92d6d5;
	}
`;

const SuratItem = ({ surat }) => {
	return (
		<>
			{surat.map((item, index) => (
				<StyledCard key={item?.number}>
					<Card.Body
						className='d-flex justify-content-between align-items-center no-wrap'
					>
						<div
							className='d-flex flex-row align-items-center'
							style={{
								width: "75%"
							}}
							>
							<SurahNumber>{item?.number}</SurahNumber>
							<div
								style={{
									flex:"4",
									paddingLeft:"30px"
								}}
							>
								<LatinSurahName>{item?.asma?.id?.short}</LatinSurahName>
								<h6 className='text-italic text-sm'>{item?.asma?.translation?.id}</h6>
							</div>
						</div>

						<div className='d-flex flex-column justify-content-end align-items-end'>
							<ArabicSurahName>{item?.asma?.ar?.short}</ArabicSurahName>
							<span>({item?.ayahCount} ayat)</span>
						</div>
					</Card.Body>
				</StyledCard>
			))}
		</>
	);
}

export default SuratItem;