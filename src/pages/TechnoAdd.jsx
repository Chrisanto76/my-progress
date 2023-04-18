import { useState } from 'react';

export default function TechnoAdd(props) {
    const [techno, setTechno] = useState({
        technoname: '',
        technocategory: '',
        technodescription: '',
    });

    const { handleAddTechno } = props;

    function handleSubmit(evt) {
        //preventDefault permet de ne pas refresh la page
        evt.preventDefault();
        handleAddTechno(techno);
        setTechno({
            technoname: '',
            technocategory: '',
            technodescription: '',
        });
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setTechno({ ...techno, [name]: value });
    }

    return (
        <div className='techno-add'>
            <h1>Add a Techno</h1>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor='technoname'>Name:</label>
                    <br />
                    <input
                        type='text'
                        name='technoname'
                        id='technoname'
                        value={techno.technoname}
                        onChange={(evt) => handleChange(evt)}
                    />
                    <br />
                    <label htmlFor='technocategory'>Category:</label>
                    <br />
                    <select
                        name='technocategory'
                        id='technocategory'
                        value={techno.technocategory}
                        onChange={(evt) => handleChange(evt)}
                    >
                        <option value=''>Select a category</option>
                        <option value='front'>front</option>
                        <option value='back'>Back</option>
                        <option value='fullstack'>Fullstack</option>
                        <option value='other'>Other</option>
                    </select>
                    <br />
                    <label htmlFor='technodescription'>Description:</label>
                    <br />
                    <textarea
                        name='technodescription'
                        id='technodescription'
                        value={techno.technodescription}
                        onChange={(evt) => handleChange(evt)}
                        cols='30'
                        rows='10'
                    ></textarea>
                    <br />
                    <input type='submit' value='Add Techno' className='btn' />
                </form>
            </div>
        </div>
    );
}
