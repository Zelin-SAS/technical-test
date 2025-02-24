const API_BASE_URL = "http://localhost:" + (process.env.BACKEND_PORT || 3001);

export async function fetchBooks() {
	const response = await fetch(`${API_BASE_URL}/books`);
	if (!response.ok) {
		throw new Error("Failed to fetch books");
	}
	return response.json();
}

export async function fetchBookById(bookId: string) {
	const response = await fetch(`${API_BASE_URL}/book/${bookId}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch book with ID: ${bookId}`);
	}
	return response.json();
}

export async function createBook(bookData: any) {
	const response = await fetch(`${API_BASE_URL}/books`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(bookData),
	});
	if (!response.ok) {
		throw new Error("Failed to create book");
	}
	return response.json();
}

export async function updateBook(bookId: string, bookData: any) {
	const response = await fetch(`${API_BASE_URL}/book/${bookId}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(bookData),
	});
	if (!response.ok) {
		throw new Error(`Failed to update book with ID: ${bookId}`);
	}
	return response.json();
}

export async function deleteBook(bookId: string) {
	const response = await fetch(`${API_BASE_URL}/book/${bookId}`, {
		method: "DELETE",
	});
	if (!response.ok) {
		throw new Error(`Failed to delete book with ID: ${bookId}`);
	}
	return response.json();
}

export async function loginUser(userData: any) {
	const response = await fetch(`${API_BASE_URL}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
	if (!response.ok) {
		throw new Error("Failed to login user");
	}
	return response.json();
}
