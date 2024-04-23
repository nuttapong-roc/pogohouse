1. Navigate to the Backend Folder:

	Once you've downloaded the folder, locate and navigate to the "backend" directory within the downloaded folder.

2. Create .env File:

	Inside the "backend" folder, create a new file named .env.

3. Define Environment Variables:

	Open the .env file you just created and define the following environment variables in the specified format:

		PORT=8126
		DB_HOST=localhost
		DB_USERNAME=poggo
		PASSWORD=1234
		DATABASE=pogohouse

	Replace the example values with the appropriate values for your setup.

4. Grant Database Privileges:

	Open your MySQL client and navigate to the "Users and Privileges" section.

	Add a new user with the same credentials as specified in the .env file, ensuring they have appropriate privileges for the specified database.

5. Install Backend Dependencies:

	Open the terminal/command prompt and navigate to the "backend" folder.

	Run npm install to install the required dependencies specified in the package.json file.

6. Install Frontend Dependencies:

	Similarly, navigate to the "frontend" folder.

	Run npm install to install the frontend dependencies.

7. Start Backend Server:

	In the "backend" folder, run npm start to start the backend server.

8. Start Frontend Server:

	In the "frontend" folder, run npm start to start the frontend server.

With both the backend and frontend servers running, you can now access and enjoy our web application, PogoHouse.