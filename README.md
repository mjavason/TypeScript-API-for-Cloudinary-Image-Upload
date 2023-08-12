# TypeScript API for Cloudinary Image Upload

This repository contains the code for a TypeScript-based image uploader that integrates with the Cloudinary service. It provides a simple API for uploading images to Cloudinary.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Sample Response](#sample-response)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js and npm
- TypeScript (installed globally)

You can install TypeScript globally using the following command:

```bash
npm install -g typescript
```

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/TypeScript-Cloudinary-Image-Uploader.git
   ```

2. Navigate to the project folder:

   ```bash
   cd TypeScript-Cloudinary-Image-Uploader
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the project root and provide your Cloudinary credentials:

   ```plaintext
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

   Replace `your-cloud-name`, `your-api-key`, and `your-api-secret` with your actual Cloudinary credentials.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   This will start the server and make it accessible at `http://localhost:6000`.

2. You can now interact with the backend API to upload images to Cloudinary. To upload an image, send a POST request to the `/api/v1/upload` endpoint with the image file attached using the `my_file` field.

   Here's an example using `curl`:

   ```bash
   curl -X POST -F "my_file=@path/to/your/image.jpg" http://localhost:6000/api/v1/upload
   ```

   The response will contain information about the uploaded image from Cloudinary. Refer to the [Sample Response](#sample-response) section for details on the response structure.

## Sample Response

Upon a successful image upload, you'll receive a response from Cloudinary with details about the uploaded image:

```json
{
    "asset_id": "4e64c36a2223f206d0d02a87e98ac62b",
    "public_id": "pbhoxagkmqzn5pweb8eg",
    "version": 1691721189,
    "version_id": "24dff9f16a3bc71e6a8fb88eebfed817",
    "signature": "1334bd5d973916f29f60f230f9104d2cd64640ec",
    "width": 1366,
    "height": 768,
    "format": "png",
    "resource_type": "image",
    "created_at": "2023-08-11T02:33:09Z",
    "tags": [],
    "bytes": 168618,
    "type": "upload",
    "etag": "ac50eb6ca899a97b3fef239f9ae71527",
    "placeholder": false,
    "url": "http://res.cloudinary.com/tech-aku/image/upload/v1691721189/pbhoxagkmqzn5pweb8eg.png",
    "secure_url": "https://res.cloudinary.com/tech-aku/image/upload/v1691721189/pbhoxagkmqzn5pweb8eg.png",
    "folder": "",
    "api_key": "638798846756997"
}
```

Please replace placeholders like `your-username`, `your-cloud-name`, `your-api-key`, and `your-api-secret` with the actual values from your Cloudinary account and GitHub repository. Adjust the README as needed to include any additional information you'd like to provide.

## Contributing

Contributions are welcome! If you encounter any issues or want to add features, feel free to create a pull request.
```
