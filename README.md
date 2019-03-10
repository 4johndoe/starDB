lifetime hooks:
    
    MOUNTING:
        constructor() => render() => componentDidMount()
    
    UPDATES:
        New Props  \
                      => render() => componentDidUpdate(prevProps, prevState)
        setState() /
            
    UNMOUNTING:
        constructor() => render() => componentWillUnmount()
    
    ERROR:
        constructor() => render() => componentDidCatch()
