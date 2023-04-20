import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <span className="font-bold">{props.alert.msg}</span>
</div>
  )
}
