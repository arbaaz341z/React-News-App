import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div>
                <div className="card my-2">
                    <div style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>
                    <span className=" badge rounded-pill bg-danger"  >{source}</span>
                    </div>
                    <img src={imageUrl ? imageUrl : "AzNewsPotImage.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })} IST</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
