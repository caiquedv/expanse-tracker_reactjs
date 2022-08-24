import styled from "styled-components";

export const Container = styled.form`
    background-color: #FFF;
    box-shadow: 0 0 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    
    input {
        margin-left: 5px;
    }

    button {
        background-color: darkblue;
        color: #FFF;
    }
`;