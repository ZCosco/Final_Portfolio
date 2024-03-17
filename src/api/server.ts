const token = '3e5766ff060e98d40577e763d4fd435926de482a2b726ae7';

export const server_calls = {
    get_coding_temple_projects: async () => { 
        const response = await fetch(`https://portfolio-api-5o1e.onrender.com/api/coding_temple_projects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server');
        }

        return await response.json();
    },

    get: async () => { 
        const response = await fetch(`https://portfolio-api-5o1e.onrender.com/api/current_projects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server');
        }

        return await response.json();
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://portfolio-api-5o1e.onrender.com/api/current_projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server');
        }

        return await response.json();
    },

    update: async (id: string, data:any = {}) => {
        const response = await fetch(`https://portfolio-api-5o1e.onrender.com/api/current_projects/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update data on the server');
        }

        return await response.json();
    },

    delete: async (id: string) => {
        const response = await fetch(`https://portfolio-api-5o1e.onrender.com/api/current_projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete data from the server');
        }

        return;
    }
};
