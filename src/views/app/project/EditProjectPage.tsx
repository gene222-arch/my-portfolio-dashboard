import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import InputFieldsSection from '../../../components/project/InputFieldsSection'
import { ProjectState } from '../../../types/states/project/ProjectState';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { projectSelector } from './../../../redux/project/selectors';
import { connect, useDispatch } from 'react-redux';
import { CreateProjectPayload, UpdateProjectPayload } from 'types/states/project';
import { updateProjectStart } from 'redux/project/action.creators';

const projectDefault: UpdateProjectPayload = 
{
    project_id: 0,
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
    const dispatch = useDispatch();
    const { id } = useParams<string>();

    const [ project, setProject ] = useState<Omit<UpdateProjectPayload, 'project_id'>>(projectDefault);

    const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault();
        
        if (id) {
            dispatch(updateProjectStart({ ...project, project_id: parseInt(id)}));
        }
    };

    useEffect(() => 
    {
        if (id) 
        {
            const projectID = parseInt(id);
            const project_ = projectState.projects.find(({ id: projectID }) => projectID === projectID);
            
            if (project_) 
            {
                setProject({
                    title: project_.title,
                    image_url: project_.image_url,
                    website_url: project_.website_url,
                    description: project_.description,
                    client_feedback: project_.client_feedback,
                    sub_image_urls: project_.images.map(img => img.image_url)
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