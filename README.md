lifetime hooks:
    
    MOUNTING:
        constructor() => render() => componentDidMount()
    
    UPDATES:
        New Props  \
                      => render() => componentDidUpdate(prevProps, prevState)
        setStqte() /
            
    UNMOUNTING:
        constructor() => render() => componentWillUnmount()
    
    ERROR:
        constructor() => render() => componentDidCatch()