const API_URL = "https://www.swapi.tech/api/"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			singlePerson: null
		},
		actions: {
			// getSinglePerson: async () => {
			// 	try {const response = await fetch(
			// 		`${API_URL}/people/${uid}`
			// 	)
			// 	const body = await response.json()
			// 	if(response.status !== 200){ 
			// 	alert("No pudimos cargar los personajes")
			// 	return;
			// }
			// 	setStore({
			// 	singlePerson: {
			// 		...body.result.properties,
			// 		uid: body.result.uid,
			// 		description: body.result.description
			// 	}
			// 	})
			// } 	catch(error){
			// 	alert("promesa rechazada, servidor caido");
			// 	}
			// },
			getPlanets: async () => {
				try {const response = await fetch(
					`${API_URL}/planets/${uid}`
				)
				const body = await response.json()
				if(response.status !== 200){ 
				alert("No pudimos cargar los personajes")
				return;
			}
				setStore({
				singlePerson: {
					...body.result.properties,
					uid: body.result.uid,
					description: body.result.description
				}
				})
			} 	catch(error){
				alert("promesa rechazada, servidor caido");
				}
			}
			,
			getCharacters: async () =>{
				try{
					const response = await fetch(
						`${API_URL}/people/${uid}`
					)
					const body = await response.json()
					if(response.status !== 200){ 
						alert("No pudimos cargar los personajes")
						return;
					}
					setStore({
						getCharacters: {
							...body.result.properties,
							uid: body.result.uid,
							description: body.result.description
						}
						})
					} 	catch(error){
						alert("promesa rechazada, servidor caido");
						}
					}
			}
		}
	}
export default getState;
