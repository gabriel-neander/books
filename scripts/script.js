document.addEventListener("DOMContentLoaded", function () {
    const bookData = document.getElementById("data");
    const bookList = document.querySelector("#list table");

    bookData.addEventListener("submit", function (event) {
        event.preventDefault();

        const bookTitle = document.getElementById("title").value;
        const bookAuthor = document.getElementById("author").value;
        const bookPages = document.getElementById("pages").value;

        const newRow = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = bookTitle;

        const authorCell = document.createElement("td");
        authorCell.textContent = bookAuthor;

        const pagesCell = document.createElement("td");
        pagesCell.textContent = bookPages;

        const editCell = document.createElement("td");
        editCell.innerHTML = '<a href="#"><img src="../images/edit.png" width="35"></a>';

        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(pagesCell);
        newRow.appendChild(editCell);

        bookList.appendChild(newRow);

        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
    });
});
