import Toggle from "../Toggle";

const Info = () => {
    // Get current date
    const currentDate = new Date();

    // Get current month (0-indexed)
    const currentMonth = currentDate.getMonth();

    // Check if current month is between November (index 10) and April (index 3)
    const isNovemberToApril = currentMonth >= 10 || currentMonth <= 3;
    const isNovember = currentMonth === 10;

    return (
        <div className="Info">
            <h2>Maps</h2>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://experience.arcgis.com/experience/df81ecf850ec44e199e031d880d278e9/"
            >
                Official IAT Map
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://afpdrjhd3hoqd3k6.maps.arcgis.com/apps/webappviewer/index.html?id=fcb2ebf47c3741cf9a50cb66fa16ceed"
            >
                Progress Map
            </a>
            {isNovemberToApril && (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://experience.arcgis.com/experience/756168e3d4864862a411a77ce61be0d0/page/Page-1/?fbclid=IwAR1IWwXjA99PszMVuIcrOrjtKAm3Ed8tpxqY93-kM59qQOVGzt7iria_CHY&views=Snow-Depth"
                >
                    Snow Depth Map
                </a>
            )}
            {isNovember && (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://iceagetrail.maps.arcgis.com/apps/webappviewer/index.html?id=30240b627f6e4c1c9c119a969d0ca42f"
                >
                    Gun Deer Trail Closure Map
                </a>
            )}

            <h2>Information</h2>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.iceagetrail.org/"
            >
                IAT Website
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/groups/214797715197465/"
            >
                Thousand Miler WannaBes Facebook Group
            </a>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/groups/IANST"
            >
                Ice Age Trail Facebook Group
            </a>

            <h2>Settings</h2>
            <Toggle name="darkMode" label="Dark Mode" />
            <Toggle
                name="hideCompleted"
                label="Hide Completed Segments / Counties"
            />
            <Toggle name="debugMode" label="Show segment / county IDs" />
        </div>
    );
};

export default Info;
