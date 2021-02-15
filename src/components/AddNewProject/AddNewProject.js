import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AddNewProject extends Component {

   componentDidMount() {
      this.props.dispatch({ type: 'FETCH_ALLCOMPANY' });
      this.props.dispatch({ type: 'FETCH_ALLLOCATION' });
   }
   state = {
      newProject: {
         project_name: '',
         company: '',
         location: '',
         PO: '',
         due_date: '',
         expedited: false,
         ordered_by: '',
         notes: '',
      }
   };

   componentDidUpdate(prevProps) {
      // look for project id prop to change which happens after adding new project
      if (this.props.store.projectReducer.projectReducer !== prevProps.store.projectReducer.projectReducer) {
         console.log('the props have changed!', this.props.store.projectReducer.projectReducer.id);
         // redirect to the new project's page
         //this.props.history.push(`/project/${this.props.store.projectReducer.projectReducer.id}`);
      }
   }

   handleChange = (event, type) => {
      this.setState({
         newProject: {
            ...this.state.newProject,
            [type]: event.target.value
         }
      })
   }

   saveProject = () => {
      if (this.state.newProject.company !== '' && 
         this.state.newProject.location !== '' && 
         this.state.newProject.PO !== '' && 
         this.state.newProject.due_date !== '' && 
         this.state.newProject.project_name !== '' &&
         this.state.newProject.ordered_by !== '') {
         // send new project info to db
         this.props.dispatch({ type: 'ADMIN_ADD_PROJECT', payload: this.state.newProject });
         this.props.dispatch({ type: 'FETCH_PORTFOLIO' })
      } else {
         alert('Please fill out all fields before Saving a New Project')
      }
   }

   render() {
      return (
         <div className="slate notched">

            <h4>Add New Project</h4>
            <br />
            <label> Project Name:
               <input type="text" onChange={(event) => this.handleChange(event, 'project_name')} value={this.state.newProject.project_name}></input>
            </label>
            <label> PO Number:
               <input type="text" onChange={(event) => this.handleChange(event, 'PO')} value={this.state.newProject.PO}></input>
            </label><br />
            <label> New Project Company:
               <select
                  required
                  onChange={(event) => this.handleChange(event, 'company')}
                  value={this.state.newProject.company}>
                     <option value=''></option>
                  {this.props.store.admin.allCompanyReducer.map((company) => {
                     return (
                        <option key={company.id} value={company.id}> {company.company_name}</option>)
                  })}
               </select>
            </label>
            <br/>
            {/* Project Location dropdown */}
            <label> New Project Location:
               <select required onChange={(event) => this.handleChange(event, 'location')} value={this.state.newProject.location}>
                  <option value=''></option>
                  {this.props.store.admin.allLocationReducer.map((location) => {
                     return (
                        this.state.newProject.company === location.company_fk &&
                        <option key={location.location_id} value={location.location_id}>{location.location_name} : {location.address}</option>
                     )
                  })}
               </select><br />
            </label>
            <label> Ordered By:
               <input type="text" onChange={(event) => this.handleChange(event, 'ordered_by')} value={this.state.newProject.ordered_by} />
            </label>
            <br />
            <label> Project Due Date:
               <input type="Date" onChange={(event) => this.handleChange(event, 'due_date')} value={this.state.newProject.due_date}></input>
            </label>
            <label> Expedited?
               <select onChange={(event) => this.handleChange(event, 'expedited')} value={this.state.newProject.expedited}>
                  <option value="false">No</option>
                  <option value="true">Yes</option>
               </select>
            </label><br/>
            <label> Notes: &nbsp;
                            <textarea placeholder="...any specific details about the project..."
                  className="notes" type="text" cols="100" rows="5"
                  value={this.state.newProject.notes}
                  onChange={(event) => this.handleChange(event, 'notes')} />
            </label>
            <br />
            <button onClick={this.saveProject}>Save Project</button>
         </div>
      );
   }
}

export default connect(mapStoreToProps)(withRouter(AddNewProject));
