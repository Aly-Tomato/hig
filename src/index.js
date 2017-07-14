/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, GlobalNav } from './react-hig';

import 'hig.web/dist/hig.css';
import './index.css';

import logo from './images/bim-logo.png';
import profileImage from './images/profileImage.png';
import TopNavFixtures from './fixtures/topNavFixtures';

const SideNav = GlobalNav.SideNav;
const LinkList = GlobalNav.SideNav.LinkList;
const Link = GlobalNav.SideNav.LinkList.Link;
const Search = GlobalNav.SideNav.Search;
const SectionList = GlobalNav.SideNav.SectionList;
const Section = GlobalNav.SideNav.SectionList.Section;
const Group = GlobalNav.SideNav.SectionList.Section.Group;
const Module = GlobalNav.SideNav.SectionList.Section.Group.Module;
const Submodule = GlobalNav.SideNav.SectionList.Section.Group.Module.Submodule;
const TopNav = GlobalNav.TopNav;
const Profile = GlobalNav.TopNav.Profile;
const Shortcut = GlobalNav.TopNav.Shortcut;
const Help = GlobalNav.TopNav.Help;
const ProjectAccountSwitcher = GlobalNav.TopNav.ProjectAccountSwitcher;
const Account = GlobalNav.TopNav.ProjectAccountSwitcher.Account;
const Project = GlobalNav.TopNav.ProjectAccountSwitcher.Project;
const TopNavSearch = GlobalNav.TopNav.Search;
const SubNav = GlobalNav.SubNav;
const Tabs = GlobalNav.SubNav.Tabs;
const Tab = GlobalNav.SubNav.Tabs.Tab;
const Slot = GlobalNav.Slot;

const topNavFixtures = new TopNavFixtures();

const links = [
  { title: 'Autodesk Main', url: 'http://www.autodesk.com' },
  {
    title: 'AutoCAD',
    url: 'https://www.autodesk.com/products/autocad/overview'
  },
  { title: 'Maya', url: 'https://www.autodesk.com/products/maya/overview' }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonLabel: 'Toggle HIG Menu',
      fn: false,
      tabs: [{ label: 'One', id: 0 }, { label: 'Two', id: 1 }],
      projects: topNavFixtures.projectList(),
      accounts: topNavFixtures.accountList(),
      modules: []
    };
  }

  handleChange = event => {
    const buttonLabel = event.target.value;
    this.setState(() => {
      return { buttonLabel };
    });
  };

  handleTopNavSearchInputChange = event => {
    console.log('TopNav Search input', event.target.value);
  };

  profileSignOutClick = event => {
    console.log('Profile Sign Out button clicked!');
  };

  addTabBefore = () => {
    const nextLabel = Math.floor(Math.random() * 100000, 5);
    const nextTabs = Array.from(this.state.tabs);
    nextTabs.unshift({ label: nextLabel.toString(), id: nextLabel });
    this.setState({ tabs: nextTabs });
  };

  addTabAfter = () => {
    const nextLabel = Math.floor(Math.random() * 100000, 5);
    const nextTabs = Array.from(this.state.tabs);
    nextTabs.push({ label: nextLabel.toString(), id: nextLabel });
    this.setState({ tabs: nextTabs });
  };

  removeTab = () => {
    const nextTabs = Array.from(this.state.tabs);
    nextTabs.pop();
    this.setState({ tabs: nextTabs });
  };

  addModule = () => {
    const key = Math.floor(Math.random() * 100000, 5);
    const module = { title: `${key}`, icon: 'document-management', key: key };
    const modules = Array.from(this.state.modules);
    modules.push(module);
    this.setState({ modules: modules });
  };



  render() {
    return (
      <div>
        <GlobalNav>
          <SideNav>
            <LinkList>
              {links.map((link, i) => {
                return <Link title={link.title} link={link.url} key={i} />;
              })}
            </LinkList>
            <SectionList>
              <Section headerLabel="Project" headerName="ThunderStorm">
                {topNavFixtures.menu().sections[0].groups.map((group, i) => {
                  return (
                    <Group key={i}>
                      {group.modules.map(module => {
                        return (
                          <Module
                            icon={module.icon}
                            contentImage={module.contentImage}
                            title={module.label}
                            key={module.label}
                          >
                            {module.submodules.map(submodule => {
                              return (
                                <Submodule
                                  title={submodule.label}
                                  link="#"
                                  key={submodule.label}
                                />
                              );
                            })}
                          </Module>
                        );
                      })}

                    </Group>
                  );
                })}
                <Group>
                  {this.state.modules.map(module => {
                    return (
                      <Module
                        icon={module.icon}
                        title={module.title}
                        key={module.key}
                      />
                    );
                  })}
                </Group>
              </Section>
              <Section headerLabel="Account" headerName="GlobalConstruction">
                {topNavFixtures.menu().sections[1].groups.map((group, i) => {
                  return (
                    <Group key={i}>
                      {group.modules.map(module => {
                        return (
                          <Module
                            icon={module.icon}
                            contentImage={module.contentImage}
                            title={module.label}
                            key={module.label}
                          >
                            {module.submodules.map(submodule => {
                              return (
                                <Submodule
                                  title={submodule.label}
                                  link="#"
                                  key={submodule.label}
                                />
                              );
                            })}
                          </Module>
                        );
                      })}
                    </Group>
                  );
                })}
              </Section>
            </SectionList>
            <Search placeholder="Find module or submodule" />
          </SideNav>
          <TopNav logo={logo} logoLink="http://autodesk.com">
            <ProjectAccountSwitcher
              onAccountChange={account =>
                console.log(`Account selected`, account)}
              onProjectChange={project =>
                console.log(`Project selected`, project)}
            >
              {this.state.projects.map((project, i) => {
                return (
                  <Project
                    image={project.image}
                    label={project.label}
                    key={project.id}
                  />
                );
              })}
              {this.state.accounts.map((account, i) => {
                return (
                  <Account
                    image={account.image}
                    label={account.label}
                    key={account.id}
                  />
                );
              })}
            </ProjectAccountSwitcher>

            <Shortcut icon="gear" title="Gears for Fears" link="/gears" />

            <Help title="HELLLP MEEEE!!!!" link="/help" />

            <Profile
              image={profileImage}
              name="Jane Doe"
              email="jane.doe@example.com"
              profileSettingsLink="http://www.autodesk.com"
              signOutLink="http://www.sanrio.com"
            />

            <TopNavSearch onInput={this.handleTopNavSearchInputChange} />

          </TopNav>
          <SubNav
            moduleIndicatorName="Documents Library"
            moduleIndicatorIcon="hamburger"
          >
            <Tabs
              onTabChange={tab => {
                console.log('client tab handler');
              }}
            >
              {this.state.tabs.map((tab, i) => {
                return <Tab key={tab.id} label={tab.label} />;
              })}
            </Tabs>
          </SubNav>

          <Slot>

            <input
              type="text"
              value={this.state.buttonLabel}
              onChange={this.handleChange}
            />
           <div >   
            <Button 
              title="Add tab before" 
              onClick={this.addTabBefore}  
               /> 
            <Button 
              title="Add tab after" 
              onClick={this.addTabAfter}
              />

            <Button 
              title="Remove tab" 
              onClick={this.removeTab} />

            <Button 
              title="Add Module" 
              onClick={this.addModule}  />

            <Button 
              size='small' 
              title="Small Button" 
              onClick={() =>{
                console.log('Small Button on click')
              }}/>

            <Button 
              size='standard' 
              title="Standard Button" 
              onClick={() =>{
              console.log('Small Button on click')
            }}/>

            <Button 
              size='large' 
              title="Large Button" 
              onClick={() =>{
              console.log('Large Button on click')
            }}/>

            <Button 
              size='small' 
              title="Disabled Button" 
              disabled={true} 
              onClick={() =>{
              console.log('Large Button on click')
              }}
              onBlur={() =>
                console.log('onblur')}
              onFocus={() =>
                console.log('focus')}  
              onHover={() =>
                console.log('hover')} />

            <Button 
              size='small' 
              type='primary' 
              title="Primary Button" 
              onClick={() =>{
              console.log('Small Primary Button on click')
            }}/>

            <Button 
              size='small' 
              type='secondary' 
              title="Secondary Button" 
              onClick={() =>{
              console.log('Small Secondary Button on click')
            }}/>

            <Button 
              size='small' 
              type='flat' 
              title="Flat Button" 
              onClick={() =>{
              console.log('Small Flat Button on click')
            }}/>

            <Button 
              size='small' 
              type='primary'
              title="Standard Button with Icon" 
              icon='gear' 
              onClick={() =>{
              console.log('Button with icon on click')
            }}/>

            <Button 
              size='small' 
              type='primary'
              title="Standard Button with Listeners Attached" 
              onClick={() =>{
              console.log('Button with icon on click')}}
              onBlur={() => {
                console.log('onblur')}}
              onFocus={() => {
                console.log('focus')}}  
              onHover={() =>{
                console.log('hover')}}/>
            </div>

            {topNavFixtures.hipsterContent().map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
          </Slot>
        </GlobalNav>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
