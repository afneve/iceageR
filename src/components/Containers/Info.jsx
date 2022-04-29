import Toggle from '../Toggle';


const Info = () => {
    return (
        <div className='Info'>
            <h2>Information</h2>
            <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://iceagetrail.maps.arcgis.com/apps/webappviewer/index.html?id=5ff8f517b1e34d46bb70ed21b36286c6'>
                Map
            </a>
            <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.iceagetrail.org/'>
                IAT Website
            </a>
            <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/groups/214797715197465/'>
                Facebook Group
            </a>

            <h2>Settings</h2>
            <Toggle name='darkMode' label='Dark Mode' />
            <Toggle name='hideCompleted' label='Hide Completed Segments / Counties' />
            <Toggle name='debugMode' label='Show segment / county IDs' />

        </div>
    );
}

export default Info;