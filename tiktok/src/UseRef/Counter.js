import React, {memo, useState, useCallback } from 'react'
function Counter({ onIncrease }) {


	console.log('log thôi');
	return (
		<>
			<button onClick={onIncrease}> + </button>
		</>
	)
}

export default memo(Counter);