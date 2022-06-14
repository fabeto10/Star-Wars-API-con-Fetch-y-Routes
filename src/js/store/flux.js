const API_URL = "https://www.swapi.tech/api/"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets:[],
			people: [],
			singlePerson: null
		},
		actions: {
			getSinglePeople: async () => {
				try {const response = await fetch(
					`${API_URL}/people/${uid}`
				)
				const body = await response.json()
				if(response.status !== 200){ 
				alert("No pudimos cargar los personajes")
				return;
			}
				setStore({
				singlePerson:
					body.results
				})
			} 	catch(error){
				alert("promesa rechazada, servidor caido");
				}
			},
			getPlanets: async () => {
				try {const response = await fetch(
					`${API_URL}/planets/`
				)
				const body = await response.json()
				if(response.status !== 200){ 
				alert("No pudimos cargar los personajes")
				return;
			}
				setStore({
				planets:
				body.results
				}
				)
			} 	catch(error){
				alert("promesa rechazada, servidor caido")
				}
			}
			,
			getCharacters: async () =>{
				try{
					const response = await fetch(
						`${API_URL}/people/`
					)
					const body = await response.json()
					if(response.status !== 200){ 
						alert("No pudimos cargar los personajes")
						return;
					}
					setStore({
						people:
						body.results
						})
					} 	catch(error){
						alert("promesa rechazada, servidor caido");
						}
					}
			}
		}
	}
export default getState;
