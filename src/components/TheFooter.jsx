import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
	return (
		<CFooter fixed={false}>
			<section>
				<a href="/" target="_blank" rel="noopener noreferrer">Judo</a>
				<span className="ml-1">&copy; 2020 Judo trends.</span>
			</section>
			<section className="mfs-auto">
				<span className="mr-1">Powered by</span>
				<a href="/" target="_blank" rel="noopener noreferrer">Judo</a>
			</section>
		</CFooter>
	)
}

export default React.memo(TheFooter)