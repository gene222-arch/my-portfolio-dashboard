import React, { useState } from 'react'
import Container from '@mui/material/Container'
import InputFieldsSection from '../../../components/project/InputFieldsSection'
import { ProjectItemType } from '../../../types/states/project/ProjectState';

const projectDefault: ProjectItemType = 
{
    id: 0,
    image_url: '',
    title: '',
    description: '',
    client_feedback: '',
    created_at: '', 
    updated_at: '',
    images: []
};

const CreateProjectPage = () => 
{
    const [ project, setProject ] = useState(projectDefault);

    const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault();
        window.alert('Saved');
    };

    return (
        <Container maxWidth="lg">
            <InputFieldsSection 
                actionText='Create'
                project={ project } 
                setProject={ setProject }
                onSubmit={ handleClickSubmit }
            />
        </Container>
    );
};

export default CreateProjectPage;