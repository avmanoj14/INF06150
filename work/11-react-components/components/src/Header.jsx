import GlobalNav from './GlobalNav';

import './Header.css';

function Header({pageChange}) {

    return (
        <header className="header">
            <div className="header__logo"> 
                <a href=""><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e256d3a0-6b21-4d99-abfb-7a8fcbf7c4c3/dfefpqx-246133f9-47a5-44ac-8e78-882fce156b6e.png/v1/fill/w_1280,h_606/discovery_channel_logo_rebrand_by_stephaniegnolanh_dfefpqx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA2IiwicGF0aCI6IlwvZlwvZTI1NmQzYTAtNmIyMS00ZDk5LWFiZmItN2E4ZmNiZjdjNGMzXC9kZmVmcHF4LTI0NjEzM2Y5LTQ3YTUtNDRhYy04ZTc4LTg4MmZjZTE1NmI2ZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sKNrOE-qPUzPHIQ8taRMMh3PBeRE9x-0FY5p3e_Mb-c"
                    width="auto" height="60px" alt="Logo of the webpage"/></a>
            </div>

            <div className="header__title">
                <h1>Famous Cat</h1>
            </div>
            <GlobalNav className="header__menu" onPageChange={pageChange}/>
        </header>
    );
}

export default Header;