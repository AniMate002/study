import React from "react";

const Layout = ({
    renderHeader,
    renderFooter,
    renderMainContent,
    renderSidebarLeft,
    renderSidebarRight,
}) => {
    return (
        <div>
            <div className='header'>{renderHeader?.()}</div>
            <div>
                <div className='sidebarLeft'>{renderSidebarLeft?.()}</div>
                <div className='mainContent'>{renderMainContent?.()}</div>
                <div className='sidebarRight'>{renderSidebarRight?.()}</div>
            </div>
            <div className='footer'>{renderFooter?.()}</div>
        </div>
    );
};

const RenderPropPage = () => {
    return (
        <Layout
            renderHeader={() => <h1>Render_Prop</h1>}
            renderFooter={() => <footer>Footer</footer>}
            renderSidebarLeft={() => <p>Left SideBar</p>}
            renderSidebarRight={() => <p>RightSideBar</p>}
            renderMainContent={() => <main>MainContext</main>}
        />
    );
};

export default RenderPropPage;
