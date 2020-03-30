import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ProjectItem from '../Project list/ProjectItem.jsx'


const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column'
	},
	selectPlaceholder: {
		textAlign: 'center'
	}
}));

const AddProjectFormWrapper = (props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState('');
	const [selectedData, setSelectedData] = React.useState(null)

	const handleChange = (event) => {
		setValue(event.target.value)
		props.userDatas.repos.forEach(element => {
			if (element.name === event.target.value) {
				setSelectedData({
					repoName: element.name,
					repoUrl: element.html_url,
					repoDesc: element.description,
					repoPath: element.full_name,
					repoOwner: element.owner.login
				})
			}
		});
	};
	return (
		<form className={classes.form}>
			<TextField defaultValue={props.userDatas.userName} variant="outlined" />
			<Select onChange={handleChange} value={value} displayEmpty >
				<MenuItem value="" disabled>
					<p className={classes.selectPlaceholder}>Sélectionner un repo</p>
				</MenuItem>
				{props.userDatas.repos.map(el => <MenuItem key={el.id} value={el.name}>{el.name}</MenuItem>)}
			</Select>
			{
				selectedData !== null &&
				<div>
					<h2>Aperçu</h2>
					<ProjectItem
						repoOwner={selectedData.repoOwner}
						repoPath={selectedData.repoPath}
						repoName={selectedData.repoName}
						repoUrl={selectedData.repoUrl}
						repoDesc={selectedData.repoDesc}
					/>
				</div>
			}
		</form>
	);
}

export default AddProjectFormWrapper;