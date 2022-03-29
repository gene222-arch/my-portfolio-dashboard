import React, { useState } from 'react'
import Container from '@mui/material/Container'
import InputFieldsSection from '../../../components/project/InputFieldsSection'
import { ProjectItemType, ProjectState } from '../../../types/states/project/ProjectState';
import { createStructuredSelector } from 'reselect';
import { projectSelector } from './../../../redux/project/selectors';
import { connect, useDispatch } from 'react-redux';
import { createProjectStart } from 'redux/project/action.creators';
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

const CreateProjectPage = ({ projectState }: Prop) => 
{
    const dispatch = useDispatch();
    const [ project, setProject ] = useState<CreateProjectPayload>(projectDefault);

    const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => 
    {
        e.preventDefault();
        dispatch(createProjectStart(project))
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