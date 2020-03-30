import React from 'react';
import Button from '@material-ui/core/Button';
import signInProvider from "../Github interface/signInProvider";

const SuggestGithubConnect = () => {
    return (
        <div>
            <h2>Connectez-vous avec Github</h2>
            <Button onClick={() => signInProvider()} variant="contained" color="primary">
                Je me connecte
            </Button>
        </div>
    )
}
export default SuggestGithubConnect