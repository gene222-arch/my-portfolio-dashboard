import React, { useState } from 'react'
import Container from '@mui/material/Container'
import InputFieldsSection from '../../../components/project/InputFieldsSection'
import { ProjectItemType, ProjectState } from '../../../types/states/project/ProjectState';
import { createStructuredSelector } from 'reselect';
import { projectSelector } from './../../../redux/project/selectors';
import { connect } from 'react-redux';

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

interface Prop {
    projectState: ProjectState
}

const CreateProjectPage = ({ projectState }: Prop) => 
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
                isLoading={ projectState.isLoading }
            />
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    projectState: projectSelector
});

export default connect(mapStateToProps)(CreateProjectPage);