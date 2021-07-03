import { colors } from '../utils/theme'

const SocialButton = ({ href, icon }) => (
  <a
    href={href}
    css={{
      width: 44,
      height: 44,
      display: 'grid',
      placeItems: 'center',
      fill: colors.onSurface[0],
      '&:hover': {
        fill: colors.accent
      }
    }}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      {icon === 'twitter' && (
        <path d='M20.748 7.45c.013.194.013.388.013.584 0 5.964-4.54 12.842-12.842 12.842v-.003A12.778 12.778 0 011 18.849a9.064 9.064 0 006.68-1.87 4.52 4.52 0 01-4.217-3.135 4.5 4.5 0 002.038-.077 4.514 4.514 0 01-3.62-4.425v-.057c.627.35 1.33.544 2.048.565a4.52 4.52 0 01-1.397-6.027 12.81 12.81 0 009.302 4.716 4.518 4.518 0 017.692-4.117c1.01-.2 1.98-.57 2.866-1.096a4.53 4.53 0 01-1.984 2.497A8.977 8.977 0 0023 5.113a9.17 9.17 0 01-2.252 2.337z' />
      )}
      {icon === 'github' && (
        <path
          fillRule='evenodd'
          d='M12 2C6.476 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.49.5.09.682-.218.682-.483 0-.237-.008-.867-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.528 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.552 9.552 0 0112 6.836a9.567 9.567 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.7 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.567 4.935.36.309.68.919.68 1.852 0 1.336-.013 2.415-.013 2.743 0 .267.18.579.688.481C19.137 20.163 22 16.418 22 12c0-5.523-4.478-10-10-10z'
          clipRule='evenodd'
        />
      )}
      {icon === 'dribbble' && (
        <path
          fillRule='evenodd'
          d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
          clipRule='evenodd'
        />
      )}
      {icon === 'instagram' && (
        <>
          <path d='M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 002.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.901 4.901 0 00-1.153-1.772 4.902 4.902 0 00-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858-.182.466-.398.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058z' />
          <path d='M12 15.334a3.333 3.333 0 110-6.667 3.333 3.333 0 010 6.667zm0-8.469a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zM18.538 6.662a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z' />
        </>
      )}
    </svg>
  </a>
)

export default SocialButton