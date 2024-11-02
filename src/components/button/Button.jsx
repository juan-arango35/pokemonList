

const Button = ({ onClick, children, className, disabled }) => {
  return (
    <button 
    onClick={onClick}
    className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition ${className}`}
    disabled={disabled}
    > {children}</button>
  )
}

export default Button