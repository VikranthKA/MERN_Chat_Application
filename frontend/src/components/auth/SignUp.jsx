import React, { useState } from 'react';
import { Box, FormControl, FormLabel, FormHelperText } from "@chakra-ui/form-control";
import axios from 'axios';
import { VStack, Input, Button } from '@chakra-ui/react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    // Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle Image Upload
    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const uploadData = new FormData();
        uploadData.append("file", file);
        uploadData.append("upload_preset", "chat-app");

        try {
            // const res = await axios.post("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", uploadData);
            // setFormData((prev) => ({ ...prev, profilePic: res.data.url }));
            
        } catch (error) {
            
        }
    };

    // Handle Submit
    const handleSubmit = async () => {
        if (formData.password !== formData.confirmPassword) {
            
            return;
        }

        setIsLoading(true);
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/register", formData);
            
        } catch (error) {

        setIsLoading(false);
    };

    return (
        <VStack spacing="10px" color="black" p={5}>
            

            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </FormControl>

            <FormControl>
                <FormLabel>Profile Picture</FormLabel>
                <Input type="file" accept="image/*" onChange={handleImageUpload} />
                <FormHelperText>Upload a profile picture (optional)</FormHelperText>
            </FormControl>

            <Button
                colorScheme="blue"
                width="100%"
                onClick={handleSubmit}
                isLoading={isLoading}
            >
                Sign Up
            </Button>
        </VStack>
    );
};

}

export default SignUp;
