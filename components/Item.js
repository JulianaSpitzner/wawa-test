export default function Item({ data }) {
    const { title, body, id } = data
    return (
      <div className="Card">
        <h1 className="Card--title">
          {id}. {title}
        </h1>
        <p className="Card--body">{body}</p>
      </div>
    )
  }