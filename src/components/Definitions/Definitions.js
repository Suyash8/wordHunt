import React from 'react';
import './Definitions.css';

const Definitions = ({word, category, meanings, LightMode}) => {
	return (
		<div className='meanings'>
			{meanings[0] && word && category==="en" && (
				<audio 
					src={
					meanings[0].phonetics[0] && meanings[0].phonetics[0].audio
					} 

					style={{
					backgroundColor: "#fff",
					borderRadius: 10,
					// height: '10px'
					}}
					controls
				>
					Your browser doesn't support audio element.
				</audio>
			)}

			{word==="" ? (
					<span className='subTitle'>Start by typing a word in Search</span>
				) : (meanings.map((mean) => (
					mean.meanings.map((item) => ((
						item.definitions.map((def) => (
							<div 
								className='singleMean' 
								style={{
									backgroundColor: LightMode?"#3b5360":"white",
									color: LightMode?"white":"black",
									transition:"all 0.5s linear"
								}}
							>
								<b>{def.definition}</b>
								<br/>
								{def.example && (
									<span>
										<b>Example: </b>{def.example}
									</span>
								)}
								<br/>
								{def.synonyms && (
									<span>
										<b>Synonyms: </b>{def.synonyms.map((s) => `${s}, `)}
									</span>
								)}
								<hr style={{
									backgroundColor: "black",
									width: "100%"
								}}/>

							</div>
						))
					)))
				)))
			}
		</div>
	);
};

export default Definitions