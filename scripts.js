var friends = ["Sandy", "Cory", "Chris", "Terry", "Ariana"];

function sing () {
    for (var i = 0; i < friends.length; i++) {
        // anything between here and the next for loop runs once PER friend
        // need to create a div with class friend
        // that div needs to contain an h3 with the "current friend"'s name
        var frnd = document.createElement ('div');
        frnd.className = 'friend';
        var h3 = document.createElement ('h3');
        var text = document.createTextNode (friends[i]);
        h3.appendChild (text);
        frnd.appendChild (h3);

        for (var lines = 99; lines > 0; lines--) {
            // after that, you need to add 99 paragraphs to the div
            if (lines > 2) {
                var para = document.createElement('p');
                var lyrics1 = document.createTextNode(
                    lines + 'lines of code in the file, ' + lines + ' lines of code; ' + friends[i] +
                    ' strikes one out, clears it all out, ' + (lines - 1) + ' lines of code in the file');
                para.appendChild(lyrics1);
                frnd.appendChild(para);
            } else if (lines === 2) {
                var para = document.createElement('p');
                var lyrics2 = document.createTextNode(
                    lines + ' lines of code in the file, ' + lines + ' lines of code; ' + friends[i] +
                    ' strikes one out, clears it all out, ' + (lines - 1) + ' line of code in the file');
                para.appendChild(lyrics2);
                frnd.appendChild(para);
            } else {
                var para = document.createElement('p');
                var lyrics3 = document.createTextNode(
                    lines + ' line of code in the file, ' + lines + ' line of code; ' + friends[i] +
                    ' strikes one out, clears it all out, no more lines of code left in the file');
                para.appendChild(lyrics3);
                frnd.appendChild(para);
            }
        }
        document.body.appendChild(frnd);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('sing-button');
    btn.addEventListener('click', function () {
        sing();
    });
});