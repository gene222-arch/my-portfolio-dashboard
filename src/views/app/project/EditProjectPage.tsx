import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import InputFieldsSection from '../../../components/project/InputFieldsSection'
import { ProjectItemType, ProjectState } from '../../../types/states/project/ProjectState';
import { useParams } from 'react-router-dom';
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

const EditProjectPage = ({ projectState }: Prop) => 
{
    const { id } = useParams<string>();

    const [ project, setProject ] = useState(projectDefault);

    const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault();
        window.alert('Updated');
    };

    useEffect(() => 
    {
        if (id) {
            const project_ = projectState.projects.find(({ id: projectID }) => projectID === parseInt(id));
            if (project_) {
                setProject(project_);
            }
        }
    }, []);

    return (
        <Container maxWidth="lg">
            <InputFieldsSection 
                actionText='Edit'
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

export default connect(mapStateToProps)(EditProjectPage);