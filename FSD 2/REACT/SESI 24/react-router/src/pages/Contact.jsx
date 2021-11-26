import { useParams } from "react-router-dom";

function Contact(props) {

    props = useParams()
    console.log(props)
    return (
        <>
            <h1>Ini halaman contact</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum quidem architecto culpa, voluptatibus ratione quos accusamus repellat molestiae unde error natus quam velit ipsa saepe? Cum fuga officiis reiciendis necessitatibus quaerat ut aut impedit facere cumque quasi reprehenderit veritatis eveniet esse repellat, laudantium error quo. Nihil quibusdam animi asperiores. Distinctio eos soluta sit dignissimos. Dicta, pariatur eum. Odio esse error a ipsam, dolor consequuntur omnis facere alias quae eum maxime, iusto fugit officia rerum, aut deleniti! Officia numquam quos et mollitia fugit assumenda aspernatur nostrum optio nisi vitae odio odit, cumque, itaque voluptas impedit voluptates explicabo? Perferendis vel culpa harum, cum magnam sunt fugit placeat consectetur qui ducimus cupiditate nam amet? Pariatur ipsa eos rerum consequuntur ea hic natus a? Quia quisquam at veniam alias quis nesciunt ea, maiores nulla voluptate fugiat? Laudantium obcaecati expedita aperiam maxime exercitationem, illum, iusto aliquam soluta ipsum laboriosam reprehenderit hic sunt, nam nostrum.
            </p>
        </>
    )
}

export default Contact