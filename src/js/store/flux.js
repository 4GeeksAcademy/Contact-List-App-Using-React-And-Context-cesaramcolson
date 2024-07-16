const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            demo: []
        },
		actions: {
            getContacts: async () => {
                try {
                    const resp = await fetch("https://playground.4geeks.com/contact/agendas/cesar-amcolson/contacts", {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    let data = await resp.json();
                    console.log(data);
                    setStore({ contacts: data.contacts });
                    return getStore().contacts;
                } catch (error) {
                    console.error("Error getting contacts:", error);
                }
            },
            createContact: async (contact) => {
                try {
                    const resp = await fetch("https://playground.4geeks.com/contact/agendas/cesar-amcolson/contacts", {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    await getActions().getContacts();
                } catch (error) {
                    console.error("Error creating contact:", error);
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