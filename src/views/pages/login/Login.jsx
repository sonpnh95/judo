import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const dataTemp = {
  username: 'sonpham',
  password: 'quelong1'
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      isRedirect: false,
      user: {
        username: '',
        password: ''
      }
    }
  }

  handleChange = (stateValue, stateName) => {
    let user = this.state.user
    user[stateName] =stateName
    this.setState({user})
  }

  loginPage = () => {
    console.log('@@@', this.state.user)
  }

  render() {
    let user = this.state.user

    return (
      <div className="c-app c-default-layout flex-row align-items-center login-background" >
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput 
                          type="text" 
                          placeholder="Username" 
                          autoComplete="username" 
                          value={user.username || ""}
                          onChange={(e) => this.handleChange(e.target.value, "username")} />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput 
                          type="password" 
                          placeholder="Password" 
                          autoComplete="current-password" 
                          value={user.password || ""}
                          onChange={(e) => this.handleChange(e.target.value, "password")}/>
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton color="success" className="px-4" onClick={() => this.loginPage()}>Login</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-info py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <CButton color="success" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )
  }
}

export default Login
