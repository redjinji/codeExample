import mockUsers from '../mocks/mocks';

function apiCall() {
	let users;
	function handleResponse(response) {
		return response.json()
		.then(json => {
			users = json;
			return response.ok ? json : Promise.reject(response);
		});
	}
	
	function mainFetch(data) {
		return new Promise((resolve, reject) => {
			fetch(`https://randomuser.me/api/?results=10&nat=us&inc=picture,name,gender,id&noinfo&${data}`)
			.then(handleResponse)
			.then(resolve)
			.catch(()=>{
				users = mockUsers
				resolve(mockUsers);
			});
			// console.log(mockUsers)
			// resolve(mockUsers[0].data);
			
		});
	}
	
	function fetchUsers() {
		return mainFetch('user');
	}
	
	function fetchUser(id) {
		// return mainFetch(`user/${id}`);
		const user = users.results.filter(user => user.id.value === id.value);
		return Promise.resolve(user);
	}
	
	return {
		fetchUsers,
		fetchUser
	}
}

export default apiCall();
