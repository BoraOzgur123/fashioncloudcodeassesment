class response {

    constructor(data = null, errors = null) {
        this.errors = errors;
        this.data = data;
    }

    success(res) {
        return res.status(200).json({
            status: "Success",
            data: this.data
        })
    }

    created(res) {
        return res.status(201).json({
            status: "Created",
            data: this.data
        })
    }

    error500(res) {
        res.status(500).json({
            status: "Error",
            errors: this.errors
        })
    }

    error400(res) {
        res.status(400).json({
            status: "Error",
            errors: this.errors
        })
    }

    notFound(res) {
        res.status(404).json({
            status: "Data Not Found",
            data:""
        })
    }

    alreadyExist(res){
        res.status(200).json({
            status: "Data already exists",
            data:this.data
        })
    }

    maximumCacheKeyExceeed(res){
        res.status(200).json({
            status: "maximumCacheKeyExceeed",
            data:this.data
        })
    }
}

module.exports =  response;