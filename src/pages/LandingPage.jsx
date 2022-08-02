import { Link } from 'react-router-dom'
import githubLogo from '../components/layout/assets/github-image.jpeg'

function LandingPage() {
  return (
    <div className='hero'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src={githubLogo}
          alt='github logo'
          className='max-w-sm rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-6xl mb-2 font-semibold'>Welcome!</h1>
          <p className='py-6 text-2xl font-light'>
            Register or Sign In if you wanna getting more to know about finding{' '}
            <br />
            repos, users, etc from{' '}
            <a
              href='https://docs.github.com/en/rest'
              className='text-accent font-semibold'
            >
              Github API
            </a>
            .
          </p>
          <Link to='/register' className='btn btn-primary'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
