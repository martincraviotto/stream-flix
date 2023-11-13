import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`Hubo un error al cargar la página.`);
				}
				const data = await response.json();
				setData(data.results);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
