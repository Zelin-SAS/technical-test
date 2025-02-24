# Zebook

Welcome to the zebook project!

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:
- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Zelin-SAS/technical-test.git
    ```
2. Navigate to the project directory:
    ```sh
    cd technical-test
    ```
3. Create and fill a .env file based on the .env.example file on the root directory
   ```
    DB_HOST=
    DB_USER=
    DB_PASSWORD=
    DB_R_PASSWORD=
    DB_NAME=book_database
    DB_PORT=3306
    FRONTEND_PORT=3000
    BACKEND_PORT=3001
   ```
4. Build and start the Docker containers:
    ```sh
    docker compose up --build -d
    ```

### Usage

Once the containers are up and running, you can access the application at `http://localhost:<FRONTEND_PORT>`.


Enjoy!