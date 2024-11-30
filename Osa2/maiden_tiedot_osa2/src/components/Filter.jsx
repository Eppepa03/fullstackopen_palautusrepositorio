const Filter = ({filterHandle}) => {
    return(
      <div>
        find countries <input onChange={filterHandle}/>
      </div>
    )
}

export default Filter