function apiCall() {
	function handleResponse(response) {
		return response.json()
		.then(json => {
			return response.ok ? json : Promise.reject(response);
		});
	}
	
	function mainFetch(data) {
		return new Promise((response, reject) => {
			fetch(`https://n161.tech/api/dummyapi/${data}`)
			.then(handleResponse)
			.then(response)
			.catch(reject);
		});
	}
	
	function fetchUsers() {
		return Promise.resolve(mainFetch('user'));
	}
	
	function fetchUser(id) {
		return Promise.resolve(mainFetch(`user/${id}`));
	}
	
	return {
		fetchUsers,
		fetchUser
	}
}

export default apiCall();
