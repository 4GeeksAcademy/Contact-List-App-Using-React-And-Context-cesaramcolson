const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getContacts: async () => {
				 try {
						const resp = await fetch("https://playground.4geeks.com/contact/agendas/cesar-amcolson/contacts", {
						method: "GET",
						headers: {
							"Content-type": "application/json"
						}}) 
						if (!resp.ok) {
							throw new Error(`error status: ${resp.status}`)
						}
						let data = await resp.json()
						console.log(data)
						setStore({contacts:data.contacts})
						return getStore().contacts
				 } catch (error) {
					console.error("Error getting contacts:", error);
				 }
			},
			createUser: async () => {
					fetch("https://playground.4geeks.com/contact/agendas/cesar-amcolson", {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					}
				})
				.then((response) => {
					return response.json();
				})
				.catch((error) => {
					console.error("Error creating user:", error);
				});
			}
		}
	};
};

export default getState;
