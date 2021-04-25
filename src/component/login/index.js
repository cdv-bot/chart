import React from 'react';
import { toast } from 'react-toastify';
import productApi from '../../apis/productsApi';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';
import logo from './../../assets/image/logo.svg';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';
import { css } from '@emotion/core';
import ClockLoader from 'react-spinners/ClockLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const override = css`
  display: inline-block;
  margin-right: 5px;
  border-color: red;
`;
function Login(props) {
  let history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [onValue, setOnValue] = React.useState({
    username: '',
    password: '',
  });

  React.useEffect(() => {
    if (Cookies.get('accessToken')) {
      history.replace('/trang-chu');
    }
  }, []);

  const handleValue = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setOnValue({
      ...onValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let data = await productApi.login(onValue);
      Cookies.set('accessToken', data.token);
      history.push('/trang-chu');
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      toast.error(
        <h3>
          Tên đăng nhập hoặc mật khẩu bạn vừa nhập chưa đúng, xin vui lòng thử lại!!!
        </h3>,
        {
          position: 'top-right',
          autoClose: 4998,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  return (
    <>
      <div className='App'>
        <div className='form_login'>
          <div className='logo'>
            <img className='logo_svg' src={logo} />
          </div>
          <div className='App__form'>
            <form onSubmit={handleSubmit} className='App__form-login'>
              <p>Đăng nhập với tài khoản VNDIRECT</p>
              <div className='input_name'>
                <label htmlFor='userName'>Tên đăng nhập:</label>
                <input
                  type='text'
                  name='username'
                  id='userName'
                  onChange={handleValue}
                />
              </div>
              <div className='input_name'>
                <label htmlFor='password'>Mật khẩu:</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  onChange={handleValue}
                />
              </div>
              <label htmlFor='dk'>
                <input type='checkbox' name='dk' id='dk' />
                Ghi nhớ trạng thái đăng nhập trên trình duyệt này
                <i className='fa fa-info-circle cPointer' />
              </label>
              <button
                id='bt_login'
                type='submit'
                className='button'
                disabled={loading}>
                {loading ? (
                  <ClockLoader color={'white'} css={override} size={15} />
                ) : (
                  <FontAwesomeIcon
                    icon={faSignInAlt}
                    style={{ marginRight: '5px' }}
                  />
                )}
                Đăng nhập
              </button>
            </form>
            <hr style={{ backgroundColor: '#CFCFD0', marginBottom: '15px' }} />
            <div className='App__form-sigin'>
              <button className='button'>
                <i className='fas fa-lock' />
                Mở khóa tài khoản
              </button>
              <a href='/#'>Trợ giúp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
