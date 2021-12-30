import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
    children?:any;
    props?:any;
    htmlType?: any;
}

const PrimaryButtonWrapper = styled(Button)`
    color: #fff;
    background: linear-gradient(
    90deg
    ,rgb(21,88,255) 0%,rgb(0,71,191) 100.02%);
    min-height: 54px;
    border-radius: 10px;
    padding: 0px 60px;

    :hover,:focus {
        background: linear-gradient(
            90deg
            ,rgb(21,88,255) 0%,rgb(0,71,191) 100.02%);
        color:#fff;
        border-color: transparent;
    }
`;

const PrimaryButton:React.FunctionComponent<IButtonProps> = ({
    children,
    ...props
}) => {
    return (
        <PrimaryButtonWrapper {...props}>
           {children}
        </PrimaryButtonWrapper>
    )
}


export default PrimaryButton;
