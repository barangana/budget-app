interface MaxWidthWrapperProps {
  children: React.ReactNode
  extraClassName?: string
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  extraClassName,
}) => {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-2.5 md:px-20 ${
        extraClassName || ''
      }`}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
