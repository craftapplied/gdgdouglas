/** @type {import('tailwindcss').Config} */

const customColours = {
  transparent: 'transparent',
  current: 'currentColor',
  white: {
    DEFAULT: 'rgba(255, 255, 255, 1)',
  },
  black: {
    DEFAULT: 'rgba(0, 0, 0, 1)',
  },
  neutral: {
    0: 'rgba(255, 255, 255, 1)',
    50: 'rgba(245, 245, 245, 1.0)',
    100: 'rgba(233, 233, 233, 1)',
    200: 'rgba(218, 218, 219, 1)',
    300: 'rgba(181, 181, 182, 1)',
    700: 'rgba(32, 33, 36, 1)',
    800: 'rgba(26, 26, 29, 1)',
	  900: 'rgba(19, 20, 22, 1)',
		1000: 'rgba(13, 13, 14, 1)',
	},
	grey: {
		100: 'rgba(241, 243, 244, 1)',
		700: 'rgba(95, 99, 104, 1)'
	},
	core: {
		green: {
			300: 'rgba(129, 201, 149, 1)',
			500: 'rgba(31, 178, 84, 1)',
		},
		yellow: {
			300: 'rgba(253, 226, 147, 1)',
			500: 'rgba(255, 187, 37, 1)',
		},
		red: {
			300: 'rgba(234, 51, 35, 1)',
			500: 'rgba(242, 139, 130, 1)',
		},
		blue: {
			300: 'rgba(138, 180, 248, 1)',
			500: 'rgba(0, 124, 243, 1)',
		},
	},
  success: {
    100: 'rgba(233, 243, 235, 1)',
    700: 'rgba(11, 136, 74, 1)',
    800: 'rgba(7, 109, 59, 1)',
    900: 'rgba(5, 82, 43, 1)',
  },
  warning: {
    100: 'rgba(254, 238, 225, 1)',
    700: 'rgba(175, 100, 4, 1)',
    800: 'rgba(140, 79, 2, 1)',
	  900: 'rgba(107, 59, 0, 1)',
	},
  danger: {
    100: 'rgba(251, 238, 235, 1)',
    700: 'rgba(188, 27, 6, 1)',
    800: 'rgba(142, 19, 4, 1)',
	  900: 'rgba(142, 19, 4, 1)',
	},
}

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			...customColours,
		},
		boxShadow: {
			100: '0 0.125rem 0.5rem 0 rgba(1, 43, 115, 0.12)',
			200: '0 0.25rem 0.75rem 0 rgba(1, 43, 115, 0.16)',
			300: '0 0.5rem 1rem 0 rgba(1, 43, 115, 0.12)',
			400: '0 0.5rem 2rem 0 rgba(1, 43, 115, 0.16)'
		},
		fontSize: {
			'headline-100': ['2.25rem', 1.25],
			'headline-200': ['1.5rem', 1.25],
			'headline-300': ['1.25rem', 1.25],
			'paragraph-100': ['1rem', 1.5],
			'paragraph-200': ['0.875rem', 1.5],
			'paragraph-300': ['0.75rem', 1.5],
			'paragraph-400': ['0.625rem', 1.5],
			'button-100': ['1rem', {
				lineHeight: 1,
				letterSpacing: '0.02rem'
			}],
			'button-200': ['0.75rem', {
				lineHeight: 1,
				letterSpacing: '0.025rem'
			}],
			'label-100': ['1rem', {
				lineHeight: 1,
				letterSpacing: '0.02rem'
			}],
			'label-200': ['0.875rem', {
				lineHeight: 1,
				letterSpacing: '0.0175rem'
			}],
			'label-300': ['0.75rem', {
				lineHeight: 1,
				letterSpacing: '0.015rem'
			}],
			'label-400': ['0.625rem', {
				lineHeight: 1,
				letterSpacing: '0.0125rem'
			}]
		},
		fontWeight: {
			regular: '400',
			bold: '700'
		},
		textColors: {
			primary: {
				black: customColours.neutral[700],
				white: customColours.white.DEFAULT
			},
			secondary: {
				black: 'rgba(32, 33, 36, 0.8)',
				white: 'rgba(255, 255, 255, 0.75)'
			},
			disabled: {
				black: 'rgba(32, 33, 36, 0.65)',
				white: 'rgba(255, 255, 255, 0.6)'
			},
		},
		extend: {
			borderRadius: {
				4: '1rem',
				6: '1.5rem',
				8: '2rem',
				12: '3rem',
				16: '4rem',
				arch: '10rem 10rem 5rem 5rem',
				'half-arch': '1rem 10rem 5rem 1rem'
			}
		},
	},
	plugins: [],
}
