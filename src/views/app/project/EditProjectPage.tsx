import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import InputFieldsSection from '../../../components/project/InputFieldsSection'
import { ProjectItemType, ProjectState } from '../../../types/states/project/ProjectState';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { projectSelector } from './../../../redux/project/selectors';
import { connect } from 'react-redux';
import { CreateProjectPayload } from 'types/states/project';

const projectDefault: CreateProjectPayload = 
{
    title: '',
    image_url: '',
    website_url: '',
    description: '',
    sub_image_urls: []
};

interface Prop {
    projectState: ProjectState
}

const EditProjectPage = ({ projectState }: Prop) => 
{
    const { id } = useParams<string>();

    const [ project, setProject ] = useState<CreateProjectPayload>(projectDefault);

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
                setProject({
                    title: project_.title,
                    image_url: project_.image_url,
                    website_url: project_.website_url,
                    description: project_.description,
                    sub_image_urls: []
                });
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